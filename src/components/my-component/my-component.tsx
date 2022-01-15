import { Component, Prop, h, Watch } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {
  @Prop() string: string = "string";

  @Watch("string")
  handleString(value: string, oldValue: string): void {
    console.log(`string prop updated: received ${value} (type = ${typeof value}); previously ${oldValue} (type = ${typeof oldValue})`);
  }

  @Prop() boolean: boolean = false;

  @Watch("boolean")
  handleBoolean(value: boolean, oldValue: boolean): void {
    console.log(`boolean prop updated: received ${value} (type = ${typeof value}); previously ${oldValue} (type = ${typeof oldValue})`);
  }

  @Prop() stringOrBoolean: string | boolean = false;

  @Watch("stringOrBoolean")
  handleStringOrBoolean(value: string | boolean, oldValue: string | boolean): void {
    console.log(`stringOrBoolean prop updated: received ${value} (type = ${typeof value}); previously ${oldValue} (type = ${typeof oldValue})`);
  }

  render() {
    return <div>
      stringOrBoolean: {this.stringOrBoolean.toString()} (type: {typeof this.stringOrBoolean})
      string: {this.string} (type: {typeof this.string})
      boolean: {this.boolean.toString()} (type: {typeof this.boolean})
    </div>;
  }
}
