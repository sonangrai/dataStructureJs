"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { solutionMenu } from "utils/solutions";

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="min-h-[100vh]">
      {solutionMenu.map((solution) => (
        <ul key={solution.id}>
          <li>
            <strong className="text-[18px]">{solution.title}</strong>

            <ul className="pl-4">
              {solution.item.map((itm) => (
                <li
                  key={itm.id}
                  className={`${pathname.includes(itm.link) ? "*:border-l-2" : ""}`}
                >
                  <Link href={itm.link} className="text-gray-600 px-2">
                    {itm.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Sidebar;
