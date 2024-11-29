pipeline {
  agent any

  stages {
    
    stage('Clonar repositorio') {
      steps {
        git branch: 'main', url: 'https://github.com/julioiud/tec-web-monolito.git'
      }
    }

    stage('Desplegar contenedor Docker') {
      steps {
        script {
            withCredentials([
              string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
            ]) {
             sh 'docker-compose up -d'
            }
        }
      }
    }
  }
}