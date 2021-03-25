<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use App\Permission;

class Agent
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = Auth::user();
        if($user && $user->role_id == config('auth.admin')['agent']) {
                return $next($request);
        }
        return redirect('/')->with('message', 'You don not have this permission');
    }
}
