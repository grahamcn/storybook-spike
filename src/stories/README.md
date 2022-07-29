# Stories

Define our components and associated styling, or document a theme via a story.

As such, each component `scss` requires importing to the partial `_index.scss` for
inclusion in the application styles.

In the case of foldered components - ie form components live under forms - all components `scss`
is imported by the parent.

All generic `scss` applicable across all components under a folder can be defined as utility classes
in the root partial.

Where stories simple expose abstract utility styles and theming mixins, these will be drawn from
the utility `src/styles` files.

## Update

We tell stories about utility classes.

We give exmaples of their usage, and the rationale behind them.

These styles are located in the stles folder, not the Stories folder.

The stories folder could well be `atoms` or `components`.

As such, I've moved the utility class stories from stories to alongside the utility class definition.
