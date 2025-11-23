export default function NetworkAutomationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Network Automation</h2>
      <p className="text-gray-600">
        Network automation enables you to manage, configure, and monitor networks programmatically.  
        Mastering these skills is essential for DevOps, system administrators, and anyone managing modern infrastructure.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Network Automation?</h3>
        <p className="text-blue-700">
          Automation reduces manual errors, speeds up network changes, and enables scalable, repeatable operations across complex environments.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. SSH Automation</h3>
      <ul>
        <li>Automate remote command execution using SSH</li>
        <li>Use tools like <code>ssh</code>, <code>paramiko</code> (Python), or <code>fabric</code></li>
        <li>Script configuration changes and data collection</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Server Provisioning</h3>
      <ul>
        <li>Automate server setup with scripts or tools (Ansible, Terraform, cloud CLIs)</li>
        <li>Install packages, configure firewalls, and set up users</li>
        <li>Ensure consistency across environments</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Using APIs in Scripts</h3>
      <ul>
        <li>Interact with network devices and cloud services via REST APIs</li>
        <li>Automate monitoring, configuration, and reporting</li>
        <li>Parse JSON/XML responses for actionable data</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Network Scanning Scripts</h3>
      <ul>
        <li>Scan networks for open ports, services, and vulnerabilities</li>
        <li>Use tools like <code>nmap</code>, <code>socket</code> (Python), or <code>masscan</code></li>
        <li>Automate inventory and security checks</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: SSH automation with paramiko (Python)
import paramiko
ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect('server_ip', username='user', password='pass')
stdin, stdout, stderr = ssh.exec_command('uptime')
print(stdout.read().decode())
ssh.close()
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Network Automation</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Automated server and network device management</li>
          <li>Rapid infrastructure provisioning and scaling</li>
          <li>Continuous monitoring and compliance checks</li>
          <li>Security auditing and vulnerability scanning</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Network automation is a key skill for modern IT and DevOps.  
        Master these techniques to manage infrastructure efficiently, securely, and at scale.
      </p>
    </div>
  );
}