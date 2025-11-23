export default function BackupRecoveryContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Backup & Recovery</h2>
      <p className="text-gray-600">
        Backup and recovery strategies are essential for protecting data against loss, corruption, and disasters.  
        Effective planning ensures business continuity and minimizes downtime.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Backup & Recovery?</h3>
        <p className="text-blue-700">
          Reliable backups and tested recovery plans safeguard critical data and support high availability for enterprise systems.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Backup Strategies</h3>
      <ul>
        <li>Full, incremental, and differential backups</li>
        <li>On-premises, cloud, and hybrid backup solutions</li>
        <li>Automated scheduling and retention policies</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Replication</h3>
      <ul>
        <li>Real-time or scheduled data replication across systems</li>
        <li>Supports disaster recovery and load balancing</li>
        <li>Options: synchronous vs asynchronous replication</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. High Availability Configurations</h3>
      <ul>
        <li>Clustered databases and failover setups</li>
        <li>Multi-region and multi-zone deployments</li>
        <li>Automated failover and health checks</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Scheduling a daily backup with cron (Linux)
0 2 * * * /usr/bin/pg_dump -U dbuser dbname > /backups/db_backup_$(date +\\%F).sql
# Verify backups and test recovery regularly
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Backup & Recovery</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Business continuity planning</li>
          <li>Disaster recovery</li>
          <li>Data protection and compliance</li>
          <li>Minimizing downtime and data loss</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Backup and recovery are critical for resilient data systems.  
        Master these strategies to protect assets and ensure rapid recovery from failures.
      </p>
    </div>
  );
}