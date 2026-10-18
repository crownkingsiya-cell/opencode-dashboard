const statCards = [
  { label: 'Active Agents', value: '12', delta: '+3 this week', tone: 'cyan' },
  { label: 'Tasks Run', value: '184', delta: '+26% uptime', tone: 'violet' },
  { label: 'Avg. Duration', value: '4m 20s', delta: '-18s faster', tone: 'emerald' },
  { label: 'Open Issues', value: '7', delta: '2 high priority', tone: 'amber' },
];

const projects = [
  { name: 'opencode', status: 'healthy', health: '98.5%', repo: 'anomalyco/opencode' },
  { name: 'agent-runner', status: 'degraded', health: '87.1%', repo: 'anomalyco/agent-runner' },
  { name: 'workflow-graph', status: 'healthy', health: '99.2%', repo: 'anomalyco/workflow-graph' },
];

const tasks = [
  { title: 'Summarize repo health', owner: 'ai-agent', time: '2m ago', status: 'Running' },
  { title: 'Review PR #148', owner: 'code-reviewer', time: '6m ago', status: 'Queued' },
  { title: 'Generate changelog', owner: 'release-bot', time: '11m ago', status: 'Success' },
  { title: 'Refactor agent prompts', owner: 'planner', time: '18m ago', status: 'Failed' },
];

const logs = [
  'Fetched repository metadata from anomalyco/opencode',
  'Resolved 3 pending tasks in the workflow queue',
  'Agent runtime metrics refreshed successfully',
  'Detected schema drift in context model output',
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="mb-8 flex flex-col gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">OpenCode</p>
            <h1 className="mt-2 text-3xl font-bold text-white">AI Project Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300">
              New Task
            </button>
            <button className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400">
              Run Agent
            </button>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((card) => (
            <div key={card.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-glow">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-slate-400">{card.label}</span>
                <span className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                  card.tone === 'cyan' ? 'bg-cyan-500/10 text-cyan-300' :
                  card.tone === 'violet' ? 'bg-violet-500/10 text-violet-300' :
                  card.tone === 'emerald' ? 'bg-emerald-500/10 text-emerald-300' :
                  'bg-amber-500/10 text-amber-300'
                }`}>
                  Live
                </span>
              </div>
              <div className="text-3xl font-bold text-white">{card.value}</div>
              <p className="mt-2 text-sm text-slate-400">{card.delta}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-glow">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Repository Health</h2>
              <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
                Stable
              </span>
            </div>

            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.name} className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-medium text-white">{project.name}</div>
                      <div className="text-xs text-slate-400">{project.repo}</div>
                    </div>
                    <span className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                      project.status === 'healthy' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-amber-500/10 text-amber-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className={`h-full rounded-full ${
                          project.status === 'healthy' ? 'bg-emerald-400' : 'bg-amber-400'
                        }`}
                        style={{ width: project.health.replace('%', '') + '%' }}
                      />
                    </div>
                    <span className="text-sm text-slate-300">{project.health}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-glow">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
              <span className="text-xs text-slate-400">Live</span>
            </div>
            <div className="space-y-3">
              {logs.map((log) => (
                <div key={log} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/80 p-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <p className="text-sm text-slate-300">{log}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-glow">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Task Queue</h2>
            <button className="text-sm text-cyan-300 hover:text-cyan-200">View all</button>
          </div>

          <div className="space-y-3">
            {tasks.map((task) => (
              <div key={task.title} className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-950/70 p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-medium text-white">{task.title}</div>
                  <div className="mt-1 text-sm text-slate-400">{task.owner} • {task.time}</div>
                </div>
                <span className={`inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-medium ${
                  task.status === 'Running' ? 'bg-cyan-500/10 text-cyan-300' :
                  task.status === 'Queued' ? 'bg-violet-500/10 text-violet-300' :
                  task.status === 'Success' ? 'bg-emerald-500/10 text-emerald-300' :
                  'bg-rose-500/10 text-rose-300'
                }`}>
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
