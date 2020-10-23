import { storiesOf } from "@storybook/vue";
import HollowBadge from "../components/HollowBadge";
import { withKnobs, text } from "@storybook/addon-knobs";

storiesOf("HollowBadge", module)
  .addDecorator(withKnobs)
  .add("Default Hollow Badge", () => ({
    props: {
      text: {
        default: text("Text", "MY TEAM"),
      },
    },
    components: {
      HollowBadge,
    },
    template: `
    <HollowBadge>{{ text }}</HollowBadge>
  `,
  }))
  .add("Gray Hollow Badge", () => ({
    props: {
      text: {
        default: text("Text", "CAPTAIN"),
      },
    },
    components: {
      HollowBadge,
    },
    template: `
      <HollowBadge badge-type="gray">{{ text }}</HollowBadge>
    `,
  }))
  .add("Purple Hollow Badge", () => ({
    props: {
      text: {
        default: text("Text", "태그요"),
      },
    },
    components: {
      HollowBadge,
    },
    template: `
      <HollowBadge badge-type="purple">{{ text }}</HollowBadge>
    `,
  }));
