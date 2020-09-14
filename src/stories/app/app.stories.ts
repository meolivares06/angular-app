import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppComponent } from "../../app/app.component";
import { moduleMetadata } from '@storybook/angular';
import { MaterialModule } from 'src/app/material/material.module';

export default {
  title: 'App/Material',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [AppComponent],
      imports: [MaterialModule]
    }),
  ],
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  props: args,
});

export const First = Template.bind({});
/*First.args = {
  primary: true,
  label: 'Button',
};*/
