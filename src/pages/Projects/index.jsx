import { useState, useEffect, useRef } from 'react';

import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import GithubCard from './GithubCard';
import SeeMore from '../../components/SeeMore';

import { Screen, ProjectsTabContainer, CardsContainer } from './styles';

const Projects = ({ ToggleTheme }) => {

    const githubConfig = {
        username: 'gabrieldp23',
        keyTopic: 'portfolio' 
    };
    
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        //requests data on start

        async function fetchAsync (url) {
            return await (await fetch(url)).json();
        }
        
        fetchAsync(`https://api.github.com/users/${githubConfig.username}/repos`).then(response => {
            setRepos(response);
        });
        
    }, [githubConfig.username])

    
    const [repositories, setRepositories] = useState([]);
    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        class Repository {
            constructor (name, description, language, website, tags) {
                this.name = name;
                this.description = description;
                this.language = language;
                this.website = website;
                this.tags = tags;
            }
        }

        var selectedRepos = []
        repos.forEach(repo => {
            repo['topics'].forEach(topic => {
                if (topic === githubConfig.keyTopic) {
                    selectedRepos.push(new Repository(
                        repo['name'], 
                        repo['description'], 
                        repo['language'], 
                        repo['homepage'], 
                        repo['topics'].filter(function(value) {
                            return value !== githubConfig.keyTopic;
                        })
                    ))
                }
            })
        });
        
        setRepositories(selectedRepos);

    }, [githubConfig.keyTopic, repos]);
    
    return (
        <Screen>
            <NavBar ToggleTheme={ToggleTheme}/>
            <ProjectsTabContainer>
                <Header title={'Projects'} subtitle={'From Github'} bg='dark'/>
                <CardsContainer>
                    {
                        repositories.map(repo => (
                            <GithubCard
                                key={repo.name}
                                repoData={repo}
                                githubConfig={githubConfig}
                            />
                        ))
                    }
                </CardsContainer>
                <SeeMore>
                    <a aria-label='More Projects' target='_blanck' href='https://github.com/gabrieldp23?tab=repositories'>
                        See more projects on GitHub
                    </a>
                </SeeMore>
            </ProjectsTabContainer>
        </Screen>
    );
}

export default Projects;