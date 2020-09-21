declare module '*.svg' {
    const value: string;
    export default value;
  }

import sasSVGstr from './sas.svg';

  export const fooIcon = new LabIcon({
    name: 'custom-ui-components:sas',
    svgstr: sasSVGstr
  });
