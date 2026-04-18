const UseStoryTable = () => {
    return (  
        <div className="px-6">
        <table className="w-full border border-[#DADCE0] rounded-[10px] font-instrument mb-5">
            <thead>
                <tr className="border-b  border-[#DADCE0]">
                    <th className="border-r capitalize">s/n</th>
                    <th className="border-r">Title</th>
                    <th className="border-r">Description</th>
                    <th className="border-r">Status</th>
                    <th className="border-r">point</th>
                    <th>priotity</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border">
                    <td className="flex justify-center border-r"> 1</td>
                    <td className="text-center border-r">Story 1</td>
                    <td className="text-center border-r">Description for Story 1</td>
                    <td className="text-center border-r">Pending</td>
                    <td className="text-center border-r">5</td>
                    <td className="text-center">High</td>

                </tr>
            </tbody>
        </table>
        </div>
    );
}
 
export default UseStoryTable;