import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository } from './styles';

const CompareList = ({ repositories, removeItemFromList, updateData, loadingUpdate }) => (
	<Container>
		{
			repositories.map((repository, repositoryIndex) => (
				<Repository key={repository.id}>
					<div>
						<header>
							<img src={repository.owner.avatar_url} alt={repository.owner.login} />
							<strong>{repository.name}</strong>
							<small>
								<a
									href={`https://github.com/${repository.owner.login}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									@{repository.owner.login}
								</a>
							</small>
						</header>

						<ul>
							<li className="flex">
								<div>
									<small>stars</small>
									<strong>{repository.stargazers_count}</strong>
								</div>

								<div>
									<small>subscribers</small>
									<strong>{repository.subscribers_count}</strong>
								</div>
							</li>
							<li className="flex">
								<div>
									<small>watchers</small>
									<strong>{repository.watchers_count}</strong>
								</div>

								<div>
									<small>forks</small>
									<strong>{repository.forks_count}</strong>
								</div>

								<div>
									<small>issues</small>
									<strong>{repository.open_issues_count}</strong>
								</div>
							</li>
							<li className="flex">

								<div>
									<small>last commit</small>
									<strong>{repository.lastCommit}</strong>
								</div>
							</li>
						</ul>
					</div>

					<div className="flex flex-buttons border">
						<button
							className="remove-item"
							title="Remove from comparison"
							onClick={() => removeItemFromList(repositoryIndex)}
						>
							<i className="fa fa-trash-o"></i>
							Remove
						</button>

						<button
							className="update-item"
							title="Sync data"
							onClick={() => updateData(repositoryIndex, repository.full_name)}
						>
							{ loadingUpdate >= 0 && loadingUpdate === repositoryIndex ? (
								<i className="fa fa-spinner fa-pulse"></i>
							) : (
								<i className="fa fa-refresh"></i>
							) }
							Sync data
						</button>
					</div>
				</Repository>
			))
		}
	</Container>
);

CompareList.propTypes = {
	repositories: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		owner: PropTypes.shape({
			login: PropTypes.string,
			avatar_url: PropTypes.string
		}),
		stargazers_count: PropTypes.number,
		watchers_count: PropTypes.number,
		subscribers_count: PropTypes.number,
		forks_count: PropTypes.number,
		open_issues_count: PropTypes.number,
		lastCommit: PropTypes.date
	})).isRequired
};



export default CompareList;