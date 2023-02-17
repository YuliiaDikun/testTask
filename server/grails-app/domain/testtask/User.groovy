package testtask

import grails.rest.Resource

@Resource(uri='/user', namespace='/api', formats=['xml', 'json'])
class User {

    String login
    String password
    static constraints = {
        login blank: false, unique: true
        password blank: false
    }
}