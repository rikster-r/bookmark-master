import Card from './Card';

const Download = () => {
  return (
    <section id="download" className="section-download">
      <div className="info download-info">
        <h2 className="title download-title">Download the extension</h2>
        <p className="subtitle download-subtitle">
          We got more browsers in the pipeline. Please do let us know if you've
          got a favourite you'd like us to prioritize
        </p>
      </div>
      <div className="card-container">
        <Card title="Chrome" version={62} />
        <Card title="Firefox" version={55} />
        <Card title="Opera" version={46} />
      </div>
    </section>
  );
};

export default Download;
