import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';
import { ThumbsUp, ThumbsDown, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const DeshimulCard = ({ item }) => {
  const [upvotes, setUpvotes] = useState(item.upvotes);
  const [downvotes, setDownvotes] = useState(item.downvotes);
  const [hasVoted, setHasVoted] = useState(null);

  const sentimentColor = {
  Positive: "border-green-500/30 bg-green-50",
  Negative: "border-red-500/30 bg-red-50",
  Neutral: "border-gray-300 bg-gray-50"
};

const sentimentTextColor = {
  Positive: "text-green-600",
  Negative: "text-red-600",
  Neutral: "text-gray-500"
};

const sentimentIcon = {
  Positive: <ThumbsUp className="h-4 w-4 mr-1 text-green-600" />,
  Negative: <ThumbsDown className="h-4 w-4 mr-1 text-red-600" />,
  Neutral: <div className="h-4 w-4 mr-1 bg-gray-400 rounded-full" />
};

 

  return (
   <Card className={cn(
  'h-full overflow-hidden transition-all duration-300 hover:shadow-lg border',
  sentimentColor[item.sentiment] || sentimentColor['Neutral']
)}>
  <CardHeader className="pb-2">
    <div className="flex items-center justify-between">
      <Badge variant="outline" className={cn(
        "font-medium",
        sentimentTextColor[item.sentiment] || sentimentTextColor['Neutral']
      )}>
        <div className="flex items-center">
          {sentimentIcon[item.sentiment] || sentimentIcon['Neutral']}
          
          {item.sentiment ==="" ? "Mixed" : item.sentiment.charAt(0).toUpperCase() + item.sentiment.slice(1)}
        </div>
      </Badge>
      <span className="text-sm font-medium text-black border-1 p-2 rounded ">{item.company}</span>
    </div>
    <h3 className="text-lg font-semibold mt-2 line-clamp-2">{item.title}</h3>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground line-clamp-3">{item.content}</p>
    <Link className='text-blue-500' to={`/details/${item.guid}`}>Read More</Link>
    

  </CardContent>
  <CardFooter className="flex justify-between pt-2 border-t">
    <Button 
      variant="ghost" 
      size="sm" 
      className={cn(
        "transition-colors",
        hasVoted === 'up' ? 'text-green-600 dark:text-green-400' : ''
      )}
    >
      <ThumbsUp className="h-4 w-4 mr-1" />
      {upvotes}
    </Button>
    <Button 
      variant="ghost" 
      size="sm" 
      className={cn(
        "transition-colors",
        hasVoted === 'down' ? 'text-red-600 dark:text-red-400' : ''
      )}
    >
      <ThumbsDown className="h-4 w-4 mr-1" />
      {downvotes}
    </Button>
  </CardFooter>
</Card>

  );
};

DeshimulCard.propTypes = {
  item: PropTypes.shape({
    guid: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    sentiment: PropTypes.oneOf(['positive', 'negative', 'neutral']).isRequired,
    upvotes: PropTypes.number.isRequired,
    downvotes: PropTypes.number.isRequired,
  }).isRequired,
};

export default DeshimulCard;