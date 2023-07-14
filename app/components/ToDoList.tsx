import {tableHeaderConfig} from "@/config/table";

export default function ToDoList() {
    return (
        <>
            <div className="">
                <table className="table bg-slate-700">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>{tableHeaderConfig.name}</th>
                        <th>{tableHeaderConfig.status}</th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </>
    )
}