class TweetsController < ApplicationController

  def index
    render(
      inertia: "Tweet/Index",
      props: {
        tweets: Tweet.order(created_at: :desc)
      }
    )
  end

  def create
    u = User.first
    tweet = u.tweets.create(tweet_params)
    redirect_to tweets_path
  end

  private

  def tweet_params
    params.require(:tweet).permit(:content)
  end
end
