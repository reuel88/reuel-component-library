import { Component, Prop, h } from '@stencil/core';

type variantType = 'primary' | 'secondary' | "link";
type variantFnType = (variantType) => string

@Component({
  tag: 'rot-button',
  styleUrl: 'rot-button.css',
  shadow: true,
})

export class Button {
  @Prop() disabled: boolean = false;

  @Prop() type: string = "";

  @Prop() href: string = "";

  @Prop() target: string = "";

  @Prop() variant: string = "primary";

  @Prop() as: string = "button";

  render() {
    const getClassesByVariant:variantFnType = (variant) => {
      switch (variant){
        case "link":
          return "rot-button inline-block px-6 py-2 bg-transparent text-blue-900 leading-tight border border-blue-500 no-underline rounded cursor-pointer " +
            "hover:bg-blue-100 " +
            "focus:outline-none focus:ring-blue-900 focus:ring-2 " +
            "disabled:opacity-50 disabled:cursor-not-allowed";
        case "secondary":
          return "rot-button inline-block px-6 py-2 bg-gray-300 text-gray-900 leading-tight border-0 no-underline rounded cursor-pointer " +
            "hover:bg-gray-400 " +
            "focus:outline-none focus:ring-gray-500 focus:ring-2 " +
            "disabled:opacity-50 disabled:cursor-not-allowed";
        default:
          return "rot-button inline-block px-6 py-2 bg-green-500 text-gray-900 leading-tight border-0 no-underline rounded cursor-pointer " +
            "hover:bg-green-600 " +
            "focus:outline-none focus:ring-green-900 focus:ring-2 " +
            "disabled:opacity-50 disabled:cursor-not-allowed";
      }
    }

    const Component = this.as;

    return (
      <Component
        class={getClassesByVariant(this.variant)}
        // class={"inline-block"}
        type={this.type}
        disabled={this.disabled}
        href={this.href}
        target={this.target}
      >
        <slot />
      </Component>
    );
  }
}
