export default function DatabaseInternalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Database Internals</h2>
      <p className="text-gray-600">
        Database internals cover the mechanisms that enable efficient, reliable, and consistent data storage and retrieval.  
        Understanding these concepts is essential for optimizing performance and troubleshooting issues.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Database Internals?</h3>
        <p className="text-blue-700">
          Knowledge of internals helps you design better schemas, optimize queries, and ensure data integrity in production systems.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. ACID Properties</h3>
      <ul>
        <li><strong>Atomicity:</strong> Transactions are all-or-nothing</li>
        <li><strong>Consistency:</strong> Data remains valid after transactions</li>
        <li><strong>Isolation:</strong> Concurrent transactions do not interfere</li>
        <li><strong>Durability:</strong> Committed data survives failures</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Indexes</h3>
      <ul>
        <li>Data structures that speed up query performance</li>
        <li>Types: B-tree, hash, bitmap, full-text</li>
        <li>Trade-off: faster reads, but slower writes and more storage</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Query Planning & Optimization</h3>
      <ul>
        <li>Database engine chooses the most efficient way to execute queries</li>
        <li>Uses statistics, indexes, and heuristics</li>
        <li>EXPLAIN plans help analyze and optimize queries</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Transactions</h3>
      <ul>
        <li>Group multiple operations into a single, atomic unit</li>
        <li>Support rollback and commit for error handling</li>
        <li>Isolation levels: read uncommitted, read committed, repeatable read, serializable</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`-- Example: Transaction in PostgreSQL
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
-- Use EXPLAIN to analyze query plans
EXPLAIN SELECT * FROM accounts WHERE balance > 1000;
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Database Internals</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Performance tuning and query optimization</li>
          <li>Designing reliable transactional systems</li>
          <li>Troubleshooting and debugging database issues</li>
          <li>Ensuring data integrity and consistency</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Database internals are key to building high-performance, reliable data systems.  
        Master these concepts to optimize, troubleshoot, and secure your databases.
      </p>
    </div>
  );
}