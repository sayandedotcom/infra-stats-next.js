declare namespace JSX {
  interface IntrinsicElements {
    // Add a declaration for the jio-navbar custom element
    "jio-navbar": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;

    // Add declarations for other custom elements if needed

    "jio-footer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
