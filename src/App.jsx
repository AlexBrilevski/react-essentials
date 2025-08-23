import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleTabButtonClick = (tabButtonId) => {
    setSelectedTopic(tabButtonId);
    console.log('2', selectedTopic);
  };

  console.log('1', selectedTopic);

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((el, index) => <CoreConcept key={index} {...el} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isActive={selectedTopic === 'components'} onClick={() => handleTabButtonClick('components')}>Components</TabButton>
            <TabButton isActive={selectedTopic === 'jsx'} onClick={() => handleTabButtonClick('jsx')}>JSX</TabButton>
            <TabButton isActive={selectedTopic === 'props'} onClick={() => handleTabButtonClick('props')}>Props</TabButton>
            <TabButton isActive={selectedTopic === 'state'} onClick={() => handleTabButtonClick('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
