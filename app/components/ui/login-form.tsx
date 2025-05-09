import { AtSign, KeyRound, ArrowRight } from 'lucide-react';
import { Button } from './button';

export default function LoginForm() {
  return (
    <form className="space-y-3">
      <div className="flex-1 rounded-lg bg-slate-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl">Please log in to continue.</h1>
        <div className="w-full">
          <div>
            <label
              htmlFor="email"
              className="mb-3 mt-5 block tex-xs font-medium text-slate-900"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-slate-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-slate-500"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
              />
              <AtSign className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-500 peer-focus:text-slate-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="mb-3 mt-5 block tex-xs font-medium text-slate-900"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-slate-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-slate-500"
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-500 peer-focus:text-slate-900" />
            </div>
          </div>
        </div>
        <Button className="mt-4 w-full">
          Log in <ArrowRight className="ml-auto h-5 w-5 text-slate-50" />
        </Button>
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
      </div>
    </form>
  );
}
