import { Chart } from '@antv/g2';
import type { Chart as G2Chart, G2Spec } from '@antv/g2';
import React, { useEffect, useRef } from 'react';

const ReactChart = props => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<G2Chart>();
  const { options, width, height } = props;

  useEffect(() => {
    if (chartRef.current || !containerRef.current) return;

    chartRef.current = new Chart({
      container: containerRef.current,
      autoFit: true,
      width: width || 200,
      height: height || 200,
    }) as G2Chart;

    if (!chartRef.current && !options) return;

    chartRef.current.options(options as G2Spec);
    chartRef.current.render();
  }, [chartRef, options, containerRef]);

  return <div ref={containerRef}></div>;
};
export default ReactChart;
