import React, { useState, useEffect } from 'react';
import { Title, Text, Input, Container, Paper, Badge } from '@mantine/core';
import axios from 'axios';
import { Canvas, Node, ElkRoot } from 'reaflow';

export function DataEty({ wordId }) {
  const [data, setData] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const getData = () => {
    axios
      .get('https://api.etymologyexplorer.com/prod/get_trees?ids[]=' + wordId)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (wordId !== 0) getData();
  }, [wordId]);

  useEffect(() => {
    if (data[1]) {
      interface NodeObject {
        id: number;
        height: number;
        width: number;
        word: string;
        language: string;
        definitions: string;
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
          height: 100,
          width: 200,
          word: data[1]['words'][item]['word'],
          language: data[1]['words'][item]['language_name'],
          definitions:
            data[1]['words'][item]['entries'] &&
            data[1]['words'][item]['entries'][0]['pos'][0]['definitions'][0],
        });
      });
      setNodes(list_nodes);

      data[3].map((item) =>
        list_edges.push({ id: `${item[0]}-${item[1]}`, from: item[0], to: item[1] })
      );
      setEdges(list_edges);
    }
  }, [data]);
  const [size, setSize] = React.useState({
    width: 2000,
    height: 2000,
  });
  const onLayoutChange = (layout: ElkRoot) => {
    if (layout.width && layout.height)
      setSize({ width: layout.width + 200, height: layout.height + 200 });
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '70vh' }}>
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
          // dragEdge={false}
          nodes={nodes}
          edges={edges}
          maxWidth={size.width}
          maxHeight={size.height}
          onLayoutChange={onLayoutChange}
          direction="RIGHT"
          node={
            <Node style={{ fill: '#117daa', strokeWidth: 0 }}>
              {(e) => (
                <foreignObject height="100px" width="200px">
                  <div
                    style={{
                      padding: 6,
                      textAlign: 'center',
                    }}
                  >
                    <Badge variant="filled" color="indigo" size="sm">
                      {e.node['language']}
                    </Badge>
                    <Title order={5} style={{ color: '#fff' }}>
                      {e.node['word']}
                    </Title>
                    <Text color="white" size="xs">
                      <i>{e.node['definitions']}</i>
                    </Text>
                  </div>
                </foreignObject>
              )}
            </Node>
          }
        />
      </div>
    </div>
  );
}
