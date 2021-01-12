json.polls @polls do |poll|
  json.id poll.id
  json.title poll.title
  json.options poll.options do |option|
    json.id option.id
    json.name option.name
    json.vote_count option.vote_count
  end
end
