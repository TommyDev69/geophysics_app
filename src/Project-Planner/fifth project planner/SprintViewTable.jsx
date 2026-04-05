const SprintViewTable = ({ sprints = [], loading = false }) => {
  return (
    <div className="text-black px-4 py-6">
      <table className="w-full border-2">
        <thead className="border-2">
          <tr className="text-center">
            <th className="border-2" rowSpan="2">S/N</th>
            <th className="border-2" rowSpan="2">Title</th>
            <th className="border-2" rowSpan="2">Description</th>
            <th className="border-2" colSpan="2">Dates</th>
            <th className="border-2" rowSpan="2">Priority</th>
          </tr>
          <tr>
            <th className="border-2">Start Date</th>
            <th className="border-2">End Date</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr className="text-center">
              <td className="border-2 p-4" colSpan="6">
                Loading sprints...
              </td>
            </tr>
          ) : sprints.length === 0 ? (
            <tr className="text-center">
              <td className="border-2 p-4" colSpan="6">
                No sprints found.
              </td>
            </tr>
          ) : (
            sprints.map((sprint, index) => (
              <tr key={sprint._id || index} className="text-center">
                <td className="border-2">{index + 1}</td>
                <td className="border-2">{sprint.title || '-'}</td>
                <td className="border-2">{sprint.description || '-'}</td>
                <td className="border-2">
                  {sprint.startDate ? new Date(sprint.startDate).toLocaleDateString() : '-'}
                </td>
                <td className="border-2">
                  {sprint.endDate ? new Date(sprint.endDate).toLocaleDateString() : '-'}
                </td>
                <td className="border-2">{sprint.priority || '-'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SprintViewTable;