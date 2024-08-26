import componentsImg from "./assets/Screenshot (38).png";
import propsImg from "./assets/Screenshot (39).png";
// import jsxImg from './assets/jsx-ui.png';
// import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = {
  component: {
    image: componentsImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
    code: `funtion welcome (){return 
      <h1>Hello,world:</h1>
      }`,
  },
  jsx: {
    image: componentsImg,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
    code: `funtion welcome (){return 
      <h1>Hello you people should not go into tech oo</h1>
      }`,
  },
  props: {
    image: propsImg,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
    code: `funtion welcome (){return 
      <h1>if at all u do tech run from .js:</h1>
      }`,
  },
  state: {
    image: propsImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
    code: `funtion welcome (){return 
      <h1>sha rest</h1>
      }`,
  },
};
export const Example = {
  components: {
    titles: "Components",
    image: componentsImg,
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
    code: `funtion welcome (){return 
      <h1>Hello,world:</h1>
      }`,
  },
  jsx: {
    titles: "JSX",
    image: componentsImg,
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
    code: `funtion welcome (){return 
      <h1>Hello you people should not go into tech oo</h1>
      }`,
  },
  props: {
    titles: "Props",
    image: propsImg,
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
    code: `funtion welcome (){return 
      <h1>if at all u do tech run from .js:</h1>
      }`,
  },
  state: {
    titles: "State",
    image: propsImg,
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
    code: `funtion welcome (){return 
      <h1>sha rest</h1>
      }`,
  },
};
