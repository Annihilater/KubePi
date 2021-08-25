import el from "element-ui/lib/locale/lang/en"
import fu from "fit2cloud-ui/src/locale/lang/en_US" // 加载fit2cloud的内容

const message = {
  commons: {
    message_box: {
      alert: "Warning",
      confirm: "Confirm",
      prompt: "Prompt",
    },
    personal: {
      exit: "Exit"
    },
    button: {
      delete: "Delete",
      import: "Import",
      create: "Create",
      cancel: "Cancel",
      login: "Login",
      confirm: "OK",
      yaml: "YAML",
      back_form: "Back to Form",
      add: "Add",
      edit: "Edit",
      edit_yaml: "Edit YAML",
      search: "Search",
      upload: "Read from file",
      view_form: "View Form",
      view_yaml: "View YAML",
      download_yaml: "Download YAML",
      open_shell: "Open SHELL",
      back_detail: "Back to Details",
      submit: "Submit",
      show_diff: "Diff Contrast",
      continue_edit: "Continue Edit",
      terminal: "Terminal",
      logs: "Log",
    },
    table: {
      name: "Name",
      created_time: "Created Time",
      status: "Status",
      action: "Operation",
      creat_by: "Creator",
      time: "Time",
      message: "Message",
      lastUpdateTime: "Update Time",
      type: "Type"
    },
    statu: {
      Running: "Running",
      Succeeded: "Succeeded",
      Failed: "Failed",
      Warninng: "Warninng",
    },
    search: {
      quickSearch: "Search"
    },
    form: {
      name: "Name",
      detail: "Details",
      setting: "Setting",
      parameters: "Parameters"
    },
    validate: {
      limit: "The length is between {0} and {1} characters",
      input: "Please enter {0}",
      select: "Please select {0}",
      required_input_msg: "The input item cannot be empty",
      required_select_msg: "Select item cannot be empty",
      number_limit: "Please enter the correct number",
      name_rules: "Only lowercase English, numbers and-are supported",
      params_not_complete: " params is not complete",
    },
    msg: {
      delete_success: "Delete successfully",
      create_success: "Created successfully",
      update_success: "Modified successfully",
    },
    confirm_message: {
      delete: "This operation cannot be undone, do you want to continue?",
      add_init_container: "The current initContainers is empty, do you want to add it now?",
      back_form: "Return form editing does not preserve all changes made to YAML",
      open_yaml: ", still want to open YAML edit?",
    },
    login: {
      username: "Username",
      password: "Password",
      title: "Log in to EKKO",
      welcome: "Welcome back, please enter your username and password to log in",
      expires: "The authentication information has expired, please log in again",
      table: {
        name: "Name",
        created_time: "Created time"
      },
      search: {
        quickSearch: "Search"
      },
      form: {
        name: "Name"
      }
    },
  },
  business: {
    common: {
      label: "Label",
      annotation: "Annotation",
      basic: "Basic Information",
      expand: "Expand",
      pack_up: "Pack Up",
      system: "System Information",
      config: "Configuration Information",
      resource: "Resource Information",
      conditions: "Conditions"
    },
    dashboard: {
      dashboard: "Dashboard"
    },
    cluster: {
      cluster: "Cluster",
      version: "Version",
      list: "Cluster List",
      import: "Import Cluster",
      nodes: "Node",
      api_server_help: "eg: https://172.16.10.100:8443",
      router_help: "The accessible IP address of any node with kube-proxy installed",
      label: "Label",
      description: "Description"
    },
    event: {
      event: "Events",
      reason: "Reason",
      type: "Type",
      time: "Time",
      resource: "Resource",
      message: "Message"
    },
    node: {
      ready: "Ready",
      role: "Role",
      os: "OS",
      arch: "Arch",
      osImage: "OS Image",
      kernel: "Kernel",
      container: "Container",
      kubelet_version: "Kubelet Version",
      kubeProxy_version: "KubeProxy Version",
      allocation: "Allocation"
    },
    pod: {
      image: "Image",
      ready: "Ready",
      restart: "Restart",
      type: "Type",
      reason: "Reason",
      message: "Message",
      lastUpdateTime: "Last Update Time",
      lastHeartbeatTime: "Last Heartbeat Time",
      lastTransitionTime: "Last Transition Time",
      size: "Size",
      resource: "Resource",
      address: "Address",
      watch: "Watch",
      lines: "Lines",
      last_20_lines: "Last 20 lines",
      last_100_lines: "Last 100 lines",
      last_200_lines: "Last 200 lines",
      last_500_lines: "Last 500 lines",
    },
    namespace: {
      namespace: "Namespace",
      description: "Description"
    },
    workload: {
      workload: "Workload",
      replicas: "Replicas",
      container: "Container",
      initContainer: "InitContainer",
      schedule: "Schedule",
      lastScheduleTime: "Last Schedule Time",
      suspend: "Suspend",
      duration: "Duration",
      lastTransitionTime: "lastTransitionTime",
      restarts: "Restarts",
      current: "Current",
      desired: "Desired",
      init: "Init",
      standard: "Standard",

      general: "General",
      container_name: "Container Name",
      container_image: "Container Image",
      pull_policy: "Pull Policy",
      pull_secrets: "Pull Secrets",

      port: "Port",
      service_type: "Service Type",
      not_create: "Not Create A Service",
      cluster_ip: "Cluster IP",
      node_port: "Node Port",
      load_balancer: "Load Balancer",
      name: "Name",
      private_port: "Private Port",
      protocol: "Protocol",
      expose: "Expose",
      public_port: "Public Port",
      listening_port: "Listening Port",
      host_ip: "Host IP",

      command: "Command",
      entry_point: "Entrypoint",
      arguments: "Arguments",
      working_dir: "WorkingDir",
      once: "Once",
      type: "Type",
      stdin: "Stdin",
      environment_variable: "Environment Variable",
      prefix_variable: "Prefix/Variable",
      source: "Source",
      value: "Value",
      variable: " Variable",

      health_check: "Health Check",
      readiness_check: "Readiness Check",
      liveness_check: "Liveness Check",
      startup_check: "Startup Check",
      check_type: "Type",
      none: "None",
      http_option: "HTTP request returns a successful status (200-399)",
      https_option: "HTTPS request returns a successful status",
      tcp_option: "TCP connection opens successfully",
      cmd_option: "Command run inside the container exits with status 0",
      check_interval: "Check Interval",
      initial_delay: "Initial Delay",
      timeout: "Timeout",
      seccess_threshold: "Seccess Threshold",
      failure_threshold: "Failure Threshold",
      header: "Header",
      check_port: "Check Port",
      check_path: "Request Path",
      check_cmd: "Command To Run",

      labels_annotations: "Labels/Annotations",
      label: "Label",
      annotations: "Annotations",
      key: "key",

      network: "Networking",
      add: "Add",
      network_mode: "Network Mode",
      normal: "Normal",
      host_network: "Host network",
      dns_policy: "DNS Policy",
      hostname: "Hostname",
      sub_domain: "Subdomain",
      nameservers: " Nameservers",
      searches: " Searches",
      dns_resolver: "DNS Resolver Options",
      host_aliases: " Host Aliases",

      affinity: "Affinity",
      anti_affinity: "Anti-Affinity",
      priority: "Priority",
      preferred: "Preferred",
      required: "Required",
      namespace_operation: "Namespace Operation",
      this_namespace: "This pod's namespace",
      these_namespace: "Pods in these namespaces",
      operator: "Operator",
      topology_key: "Topology Key",
      node_selector: " Node Selector",
      match_expressions: " Match Expression",
      match_labels: " Match Label",

      node_schedule: "Node Scheduling",
      schedule_type: "Scheduling Type",
      any_node: "Run pods on any avaliable node",
      specific_node: "Run pods on specific node(s)",
      match_rules: "Run pods on node(s) matching scheduling rules",
      weight: "Weight",
      rule: "Rule",
      node_name: "Node Name",

      toleration: " Tolerations",
      effect: "Effect",
      all: "All",
      no_schedule: "NoSchedule",
      prefer_no_schedule: "PreferNoSchedule",
      no_execute: "NoExecute",
      toleration_seconds: "Toleration Seconds",
      seconds: "Secends",
      times: "Times",

      resource: "Resources",
      reservation: " Reservation",
      memory: "Memory",
      limit: " Limit",

      upgrade_policy: "Update Policy",
      strategy: "Strategy",
      restart_strategy: "Restart strategy",
      rolling_update: "Rolling Updatate: Create new pods, then stop old",
      recreate: "Recreate: Kill aLL pods, then start new",
      max_surge: "Max Surge",
      max_unavaliable: "Max Unavailable",
      min_ready_time: "Minimum Ready Time",
      revision_history_limit: "Revision History Limit",
      revision: "Revision",
      progress_deadline: "Progress Deadline",
      termination_grace_period: "Termination Grace Period",
      concurrency: "Concurrency",
      allow_run: "Allow cronJobs to run concurrently",
      skip_if_not_finish: "Skip next if current run hasn't finished",
      replace_if_not_finish: "Replace run if current run hasn't finished",
      completions: "Completions",
      parallelism: "Parallelism",
      back_off_limit: "Back Off Limit",
      active_deadline: "Active Deadline",
      successful_job_history_limit: "Successful Job History Limit",
      failed_job_history_limit: "Failed Job History Limit",
      starting_deadline_seconds: "Starting Deadline Seconds",
      pod_active_deadline: "Pod Active Deadline",
      pod_manage_policy: "Pod Manage Policy",

      security_context: "Security Context",
      privileged: "Privileged",
      no: "No",
      full_access: "Yes: container has full access to the host",
      gain_more_privileges: "Yes: container can gain more privileges than its parent process",
      non_root: "Yes: container must run as a non-root user",
      filesystem_read_only: "Yes: container has a read-only root filesystem",
      privilege_escalation: "Privilege Escalation",
      run_as_non_root: "Run As Non-Root",
      read_only_root_filesystem: "Read-Only Root Filesystem",
      run_as_user_id: "Run As User ID",
      add_capabilities: "Add Capabilities",
      drop_capabilities: "Drop Capabilities",

      storage: "Storage",
      yes: "Yes",
      pvc: "PVC",
      volume_name: "Volume Name",
      volume_mount: "Valume Mount",
      volume: " Valume",
      mount: "Mount",
      default_mode: "Default Mode",
      optional: "Optional",
      mount_point: "Mount Point",
      sub_path_in_volume: "Sub Path In Volume",
      read_only: "Read Only",

      volume_claim_template: "Volume Claim Templates",
      pv_name: "Persistent Volume Name",
      new_pv: "Use a storage class to provision a new persistent volume",
      existing_pv: "Use an existing persistent volume",
      storage_class: "Storage Class",
      size: "Size",
      access_modes: "Access Modes",
      single_read_write: "Single-Node(Read/Write)",
      many_read_only: "Many-Node(Read-Only)",
      many_read_write: "Many-Node(Read/Write)",
    },
    network: {
      network: "Network",
      service_name: "Service Name",
    },
    storage: {
      storage: "Storage",
    },
    configuration: {
      configuration: "Configuration",
      data: "Data",
      no_data: "No Data",
      type: "Type",
      basic_auth: "Basic Auth",
      ssh_auth: "SSH Auth",
      tls_auth: "TLS",
      token_auth: "Token Auth",
      cluster_ip: "Cluster IP",
      selector: "Selector",
      registry_domain_name: "Registry Domain Name",
      username: "Username",
      password: "Password",
      authentication: "Authentication",
      certificate: "Certificate",
      publicKey: "PublicKey",
      privateKey: "PrivateKey",
      target: "Target",
      metrics: "Metrics",
      min_replicas: "Min Replicas",
      max_replicas: "Max Replicas",
      current_replicas: "Current Replicas",
      target_reference: "Target Reference",
      source: "Source",
      resource_name: "Resource Name",
      quantity: "Quantity",
      metrics_name: "Metrics Name",
      metrics_selector: "Metrics Selector",
      api_version: "API Version",
      kind: "Kind",
      name: "Name"
    },
    access_control: {
      access_control: "Access Control",
      resource_helper: "Use multiple items, separate"
    },
    custom_resource: {
      custom_resource: "Custom Resource",
      full_name: "Full Name",
      namespaced: "Namespaced",
      version: "Version",
      scope: "Scope",
      names: "Names",
      singular: "Singular",
      plural: "Plural",
      served: "Served",
      storage: "Storage",
      status: "Status"
    },
    user: {
      user_management: "User Management",
      user_group: "User Group",
      nickname: "Nickname",
      email: "Email",
      user_list: "User List",
      user_group_list: "User Group List",
      role_list: "Role List",
      user: "User",
      role: "Role",
    }
  }
}

export default {
  ...el,
  ...fu,
  ...message
}
