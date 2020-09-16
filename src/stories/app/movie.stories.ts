import { Story, Meta } from '@storybook/angular/types-6-0';
import { MovieComponent } from "../../app/ui/movie/movie.component";
import { moduleMetadata } from '@storybook/angular';
import { MaterialModule } from 'src/app/material/material.module';

export default {
  title: 'App/Material',
  component: MovieComponent,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [MovieComponent],
      imports: [MaterialModule]
    }),
  ],
} as Meta;

const Template: Story<MovieComponent> = (args: MovieComponent) => ({
  component: MovieComponent,
  props: args,
});

export const NormalState = Template.bind({});
/*First.args = {
  primary: true,
  label: 'Button',
};*/
