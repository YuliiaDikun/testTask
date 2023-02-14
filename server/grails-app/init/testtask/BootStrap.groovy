package testtask

class BootStrap {

    def init = { servletContext ->        
        new User(login: 'admin', password: 'admin').save()        
    }
    def destroy = {
    }
}
