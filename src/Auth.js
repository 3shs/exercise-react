import React, { useContext, createContext, useState } from 'react'
import { BrowserRouter as Router, Switch , Route, Link, useRouteMatch, useParams } from 'react-router-dom'

export default function AuthExample () {
    return (
        <ProvideAuth>

        </ProvideAuth>
    ) 
}

const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

function ProvideAuth () {
    const auth = useProvideAuth()

}

function useProvideAuth () {
    const [user, setUser] = useState(null)

    const signin = cb => {
        return fakeAuth.signin( () => {
            setUser('user')
            cb()
        })
    }
    
    const signout = cb => {
        return fakeAuth.signout(() => {
          setUser(null)
          cb()
        })
    }
    
    return {
        user,
        signin,
        signout
    }
}

function AuthButton () {
    
}
