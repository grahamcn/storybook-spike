import React from 'react';

export default {
  title: 'Utility classes/List',
};

const Template: ComponentStory = () =>
  <article className="article list">
    <h1>Lists & list items</h1>

    <section className="section list-item">
      <p>
        Lists control layout along one axis, and by default add a margin between vertical lists.
        We implement via flex, ie we abstract away flex with a list.
      </p>
    </section>

    <section className="section list-item">
      <h2>Default</h2>

      <div className="list list-item">
        <div className="list-item">List item 1</div>
        <div className="list-item">List item 2</div>
        <div className="list-item">List item 3</div>
      </div>
    </section>

    <section className="section list-item">
      <h2>Inline</h2>

      <div className="list inline list-item">
        <div className="list-item">List item 1</div>
        <div className="list-item">List item 2</div>
        <div className="list-item">List item 3</div>
      </div>
    </section>
  </article>

export const List = Template.bind({});
