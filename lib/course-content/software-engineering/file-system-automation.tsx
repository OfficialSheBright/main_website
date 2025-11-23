export default function FileSystemAutomationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">File & System Automation</h2>
      <p className="text-gray-600">
        File and system automation enables you to streamline repetitive tasks, manage files, and monitor system resources efficiently.  
        Mastering these skills is essential for DevOps, scripting, and backend engineering roles.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Automate File & System Tasks?</h3>
        <p className="text-blue-700">
          Automation saves time, reduces errors, and ensures consistency in system administration and software operations.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Automating File Operations</h3>
      <ul>
        <li>Create, move, copy, and delete files and directories</li>
        <li>Batch rename and organize files</li>
        <li>Automate backups and file synchronization</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Backup Scripts</h3>
      <ul>
        <li>Automate regular backups of important data</li>
        <li>Compress and archive files for storage efficiency</li>
        <li>Schedule backups using cron jobs or task schedulers</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Cron Jobs / Scheduled Tasks</h3>
      <ul>
        <li>Run scripts automatically at specified intervals</li>
        <li>Automate maintenance, monitoring, and reporting</li>
        <li>Use <code>cron</code> (Linux) or Task Scheduler (Windows)</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Monitoring System Resources</h3>
      <ul>
        <li>Track CPU, memory, disk, and network usage</li>
        <li>Send alerts or logs when thresholds are exceeded</li>
        <li>Automate cleanup or scaling actions based on resource usage</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Bash script to back up a directory
#!/bin/bash
tar -czvf backup_$(date +%F).tar.gz /path/to/directory
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of File & System Automation</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Automated backups and disaster recovery</li>
          <li>System maintenance and health monitoring</li>
          <li>Batch processing of files and data</li>
          <li>Streamlining DevOps and IT operations</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        File and system automation is a key skill for efficient system management.  
        Master these techniques to save time, reduce errors, and improve reliability in your workflows.
      </p>
    </div>
  );
}