const SprintViewTable = () => {
  return ( 
    <div className="text-black px-4 py-6">
        <table className="w-full border-2  ">
            <thead className="border-2">
                <tr className=" text-center">
                    <th className=" border-2" rowSpan="2">S/N</th>
                    <th className=" border-2" rowSpan="2">Title</th>
                    <th className=" border-2" rowSpan="2">Description</th>
                    <th className=" border-2" colSpan="2">Dates</th>
                    <th className=" border-2" rowSpan="2">Priority</th>
            </tr>
                <tr>
                    <th className="border-2">Start Date</th>
                    <th>End Date</th>
                </tr>
            </thead>

            <tbody>
            <tr className="text-center">
                <td className=" border-2"></td>
                <td className=" border-2"></td>
                <td className=" border-2"></td>
                <td className=" border-2"></td>
                <td className=" border-2"></td>
                <td className=" border-2"></td>
            </tr>
            </tbody>
        </table>
    </div>
  );
}

export default SprintViewTable;