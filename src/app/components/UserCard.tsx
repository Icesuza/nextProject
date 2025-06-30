'use client';
import { UserType } from "@/type/User";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
async function getUser() {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    const users: UserType[] = data.users;
    return users;
}
export default function UserCard() {
    const { data: users, isLoading, error } = useQuery({
        queryKey: ["users"],
        queryFn: getUser,
    })
    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {(error as Error).message}</p>;
    }

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                users?.map((user) => (
                    <div key={user.id} className="mx-auto">
                        <div className="card md:flex max-w-lg">
                            <div className="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
                                <Image
                                    width={80}
                                    height={80}
                                    alt="User Avatar"
                                    className="object-cover rounded-full"
                                    unoptimized
                                    src={user.image} />
                            </div>
                            <div className="flex-grow text-center md:text-left">
                                <p className="font-bold">{user.email}</p>
                                <p className="font-bold">{user.phone}</p>
                                <h3 className="text-xl heading">{user.username}</h3>
                                <p className="mt-2 mb-3">John is a Senior Developer, mainly works in backend technologies.</p>
                                <div>
                                    <span className="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">Discrete Math</span>
                                    <span className="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">Topology</span>
                                    <span className="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">Neural Nets</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    );
}
