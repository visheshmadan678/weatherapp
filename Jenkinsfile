pipeline {
    agent any

    environment {
        IMAGE_NAME = 'weather-dashboard'
        TAG = 'latest'
        DOCKERHUB_REPO = 'visheshmadan/weather-dashboard'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install & Lint') {
            steps {
                sh 'npm ci'
                sh 'npm run lint'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:${TAG} ."
            }
        }

        stage('Login and Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh """
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker tag ${IMAGE_NAME}:${TAG} ${DOCKERHUB_REPO}:${TAG}
                        docker push ${DOCKERHUB_REPO}:${TAG}
                    """
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
        success {
            echo 'Image pushed to Docker Hub successfully!'
        }
        failure {
            echo 'Build or push failed.'
        }
    }
}
