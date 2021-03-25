<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use App\Permission;

class Moderator
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $name)
    {
		$user = Auth::user();
		if($user && $user->role_id == config('auth.admin')['super']) {
			return $next($request);
		} elseif($user && $user->role_id == config('auth.admin')['moderator']) {
			if($name) {
				$permission = Permission::where('name', $name)->where('is_active', 1)->first();
				if($permission != null) {
					return $next($request);
				}
			} else {
				return $next($request);
			}
		}
		return redirect('/')->with('message', 'You don not have this permission');
	}
}
