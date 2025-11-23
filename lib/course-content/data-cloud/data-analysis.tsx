export default function DataAnalysisContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Data Analysis</h2>
      <p className="text-gray-600">
        Data analysis is the process of inspecting, cleaning, transforming, and modeling data to discover useful information and support decision-making.  
        Mastering data analysis is foundational for data science, engineering, and business intelligence.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Data Analysis?</h3>
        <p className="text-blue-700">
          Data analysis uncovers patterns, trends, and insights that drive business value and inform strategic decisions.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Pandas</h3>
      <ul>
        <li>Powerful Python library for data manipulation and analysis</li>
        <li>DataFrames for tabular data, Series for 1D data</li>
        <li>Supports filtering, grouping, aggregation, and merging</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Data Cleaning</h3>
      <ul>
        <li>Handle missing values, duplicates, and outliers</li>
        <li>Standardize formats and correct errors</li>
        <li>Prepare data for analysis and modeling</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Exploratory Data Analysis (EDA)</h3>
      <ul>
        <li>Summarize data distributions and relationships</li>
        <li>Visualize data with charts and plots</li>
        <li>Identify patterns, anomalies, and hypotheses</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Visualization (Matplotlib, Seaborn, Plotly)</h3>
      <ul>
        <li>Create informative charts: bar, line, scatter, histogram, etc.</li>
        <li>Use Matplotlib for basic plots, Seaborn for statistical graphics, Plotly for interactive dashboards</li>
        <li>Communicate findings effectively to stakeholders</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Data analysis with Pandas and Seaborn
import pandas as pd
import seaborn as sns
df = pd.read_csv("data.csv")
print(df.describe())
sns.histplot(df["age"])
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Data Analysis</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Business intelligence and reporting</li>
          <li>Data-driven decision making</li>
          <li>Machine learning and predictive modeling</li>
          <li>Operational monitoring and optimization</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Data analysis is essential for extracting value from data.  
        Master these techniques to turn raw data into actionable insights and drive business success.
      </p>
    </div>
  );
}