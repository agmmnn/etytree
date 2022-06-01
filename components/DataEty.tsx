import React, { useState, useEffect } from 'react';
import { Title, Text, Input, Container, Paper } from '@mantine/core';
import axios from 'axios';
import { Canvas, Node } from 'reaflow';

export function DataEty() {
  const [data, setData] = useState([]);
  const [nodes, setNodes] = useState<any[]>([]);
  const [edges, setEdges] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('https://api.etymologyexplorer.com/prod/get_trees?ids[]=1315')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (data[1]) {
      interface NodeObject {
        id: number;
        text: string;
      }
      interface EdgeObject {
        id: string;
        from: number;
        to: number;
      }

      let list_nodes: NodeObject[] = [];
      let list_edges: EdgeObject[] = [];

      Object.keys(data[1]['words']).map((item) => {
        list_nodes.push({
          id: data[1]['words'][item]['_id'],
          text: `${data[1]['words'][item]['word']}
          ${data[1]['words'][item]['language_name']},
          ${data[1]['words'][item]['entries'][0]['pos'][0]['definitions'][0]}`,
        });
      });
      setNodes(list_nodes);

      data[3].map((item) =>
        list_edges.push({ id: `${item[0]}-${item[1]}`, from: item[0], to: item[1] })
      );
      setEdges(list_edges);
    }
  }, [data]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '60vh' }}>
      <style>
        {`
        ::-webkit-scrollbar {
          width:0.9em;
          height: 0.9em;
        }
        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        }
        ::-webkit-scrollbar-thumb {
          background-color: #383c63;
        }
        `}
      </style>
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,

          marginTop: '10px',
          backgroundColor: '#0d0e17',
          backgroundImage:
            '-webkit-repeating-radial-gradient(top center, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 0, transparent 100%)',
          backgroundSize: '20px 20px',
          borderTop: '4px solid #17649d',
        }}
      >
        <Canvas
          className="canvas"
          fit={true}
          // dragEdge={false}
          nodes={nodes}
          edges={edges}
          direction="RIGHT"
          node={<Node style={{ fill: '#117daa', strokeWidth: 0 }}>sdf</Node>}
        />
      </div>
    </div>
  );
}

/*
    <>
      {data[1] &&
        Object.keys(data[1]['words']).map((wd) => {
          return (
            <Paper shadow="sm" p="xs" withBorder key={uuidv4()}>
              {data[1]['words'][wd].word}
            </Paper>
          );})}
    </>
*/
