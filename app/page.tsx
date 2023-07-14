import AddTask from "@/app/components/AddTask";
import ToDoList from "@/app/components/ToDoList";

export default function Home() {
    return (
        <main className={"overflow-hidden w-[80rem] mx-auto"}>
        <div className={"flex flex-col mx-auto w-[30rem]"}>
            <h1 className={"w-full m-3 text-center font-bold text-6xl"}>ToDo List App</h1>
            <AddTask/>
        </div>
            <div className={"w-full mt-5"}>
                <ToDoList/>
            </div>
        </main>
    )
}
