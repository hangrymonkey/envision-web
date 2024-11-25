import Link from "next/link";
import MaxWidthWrapper2 from "./MaxWidthWrapper2";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  const user = undefined;
  const isAdmin = false;

  return (
    <nav className="z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper2>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold text-xl">
            EduOwl
          </Link>

          <div className="h-full flex items-center space-x-4">
            <>
              <Link
                href="#story"
                className={buttonVariants({
                  size: "lg",
                  variant: "ghost",
                })}
              >
                Our Story
              </Link>

              <Link
                href="#different"
                className={buttonVariants({
                  size: "lg",
                  variant: "ghost",
                })}
              >
                What Makes Us Different? 
              </Link>

              <Link
                  href="#whytuition"
                  className={buttonVariants({
                    size: "lg",
                    variant: "ghost",
                  })}
                >
                  Why Home Tuition
              </Link>

              <Link
                  href="#getstarted"
                  className={buttonVariants({
                    size: "lg",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Get Started!
              </Link>


            </>
            {user ? (
              <>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign out
                </Link>
                {isAdmin ? (
                  <Link
                    href="/api/auth/logout"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Dashboard ✨
                  </Link>
                ) : null}
              </>
            ) : (
              <>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper2>
    </nav>
  );
};

export default Navbar;
