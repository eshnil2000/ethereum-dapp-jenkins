pipeline {
    agent none 
    stages {
        stage('Test') { 
            agent {
                docker {
                    image 'python:3.6-alpine' 
                }
            }
            steps {
                sh 'python --version' 
            }
        }
        stage('Deploy') { 
            agent {
                docker {
                    image 'python:3.6-alpine' 
                    args '-p 8081:8081'
                }
            }
            steps {
                sh './scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './scripts/kill.sh'
            }
        }        
    }
}
