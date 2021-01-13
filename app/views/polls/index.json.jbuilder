json.polls @polls do |poll|
  json.id poll.id
  json.title poll.title
  json.user_id poll.user_id
  json.current_user current_user
  json.voters poll.voter_ids
  json.options poll.options do |option|
    json.id option.id
    json.name option.name
    json.vote_count option.vote_count
  end
end
