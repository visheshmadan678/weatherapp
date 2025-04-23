pipeline {
    agent any

    environment {
        IMAGE_NAME = 'weather-dashboard'
        DOCKER_REGISTRY = 'visheshmadan/weather-dashboard'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}")
                }
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-token', variable: 'DOCKERHUB_TOKEN')]) {
                    script {
                        sh "echo $DOCKERHUB_TOKEN | docker login -u your-dockerhub-username --password-stdin"
                        sh "docker tag ${IMAGE_NAME} ${DOCKER_REGISTRY}"
                        sh "docker push ${DOCKER_REGISTRY}"
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
