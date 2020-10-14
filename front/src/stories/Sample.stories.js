import { storiesOf } from "@storybook/vue";

storiesOf("Sample", module).add("counter", () => ({
  data: () => ({
    count: 0,
  }),

  template: `
    <div>
      <div>{{ count }}<div>
      <button>+</button>
      <button>-</button>
    <div>
  `,
}));
