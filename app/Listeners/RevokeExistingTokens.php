<?php

namespace App\Listeners;

use App\User;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class RevokeExistingTokens
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        // $user = User::find($event->userId);

        // $user->tokens()->limit(1)->get()->map(function ($token) {
        //     $token->revoke();
        // });
    }
}
