import { Button, Space } from 'antd';
import React, { useEffect, useState } from 'react';

export default () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  const fetchResults = page => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(page);
      }, 1000);
    });
  };

  // use
  useEffect(() => {
    let ignore = false;
    fetchResults(page).then((json: any) => {
      if (!ignore) {
        setResults(json);
      }
    });
    return () => {
      ignore = true;
    };
  }, [page]);

  return (
    <Space>
      {page}:{results}
      <Button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        please multi click
      </Button>
    </Space>
  );
};
