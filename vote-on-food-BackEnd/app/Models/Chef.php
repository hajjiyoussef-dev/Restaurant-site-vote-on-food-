<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Chef extends Authenticatable
{
    use Notifiable;

    
    protected $table = 'chef';

    
    public function getAuthIdentifierName()
    {
        return 'id';
    }

    public function getAuthIdentifier()
    {
        return $this->getKey();
    }

    public function getAuthPassword()
    {
        return $this->password;
    }

    public function getRememberToken()
    {
        return null; 
    }

    public function setRememberToken($value)
    {
        
    }

    public function getRememberTokenName()
    {
        return null; 
    }
}
