import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Paper,
  Fade,
  Slide,
  Grow,
  IconButton,
  Tooltip,
  Chip,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
} from '@mui/material';
import {
  Add as AddIcon,
  Send as SendIcon,
  Person as PersonIcon,
  Message as MessageIcon,
  CurrencyRupee as RupeeIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface Contact {
  id: string;
  name: string;
  phone: string;
  amount: number;
}

// Mock contacts data
const mockContacts: Contact[] = [
  { id: '1', name: 'John Doe', phone: '+91 98765 43210', amount: 0 },
  { id: '2', name: 'Jane Smith', phone: '+91 87654 32109', amount: 0 },
  { id: '3', name: 'Mike Johnson', phone: '+91 76543 21098', amount: 0 },
  { id: '4', name: 'Sarah Williams', phone: '+91 65432 10987', amount: 0 },
  { id: '5', name: 'David Brown', phone: '+91 54321 09876', amount: 0 },
];

const SmartBillSplit: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState<string>('');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [message, setMessage] = useState<string>('');
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalAmount(e.target.value);
  };

  const handleAddContact = () => {
    setIsContactDialogOpen(true);
  };

  const handleContactSelection = (contactId: string) => {
    setSelectedContacts(prev => {
      if (prev.includes(contactId)) {
        return prev.filter(id => id !== contactId);
      }
      return [...prev, contactId];
    });
  };

  const handleConfirmContacts = () => {
    const newContacts = mockContacts.filter(contact => 
      selectedContacts.includes(contact.id)
    ).map(contact => ({
      ...contact,
      amount: parseFloat(totalAmount) / selectedContacts.length
    }));
    setContacts(newContacts);
    setIsContactDialogOpen(false);
  };

  const handleSendRequest = (contactId: string) => {
    console.log(`Sending request to ${contactId}`);
  };

  const handleDeleteContact = (contactId: string) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
    setSelectedContacts(prev => prev.filter(id => id !== contactId));
  };

  const calculateShare = () => {
    const amount = parseFloat(totalAmount) || 0;
    const share = amount / (contacts.length || 1);
    return share.toFixed(2);
  };

  const filteredContacts = mockContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.includes(searchQuery)
  );

  return (
    <Box sx={{ 
      p: { xs: 2, md: 4 },
      maxWidth: 800,
      margin: '0 auto',
      minHeight: 'calc(100vh - 200px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      fontFamily: "'Poppins', 'Roboto', sans-serif"
    }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 700,
            color: 'text.primary',
            mb: 2,
            textAlign: 'center',
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: '-0.5px',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          Smart Bill Split
        </Typography>
      </motion.div>

      <Paper 
        elevation={0}
        sx={{ 
          p: 3,
          borderRadius: 3,
          bgcolor: 'background.paper',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          border: '1px solid rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
            transform: 'translateY(-2px)',
          }
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 600,
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '0.5px'
              }}
            >
              <RupeeIcon sx={{ color: 'primary.main' }} />
              Total Bill Amount
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter total amount"
              value={totalAmount}
              onChange={handleAmountChange}
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RupeeIcon sx={{ color: 'primary.main' }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 2,
                  bgcolor: 'background.default',
                  transition: 'all 0.3s ease',
                  fontFamily: "'Poppins', sans-serif",
                  '&:hover': {
                    bgcolor: 'action.hover',
                    transform: 'translateY(-2px)',
                  },
                  '&.Mui-focused': {
                    bgcolor: 'background.paper',
                    boxShadow: '0 0 0 2px rgba(33, 150, 243, 0.2)',
                  }
                }
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 600,
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '0.5px'
              }}
            >
              <MessageIcon sx={{ color: 'primary.main' }} />
              Add a Note (Optional)
            </Typography>
            <TextField
              fullWidth
              placeholder="e.g., Dinner at Pizza Hut"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MessageIcon sx={{ color: 'primary.main' }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 2,
                  bgcolor: 'background.default',
                  transition: 'all 0.3s ease',
                  fontFamily: "'Poppins', sans-serif",
                  '&:hover': {
                    bgcolor: 'action.hover',
                    transform: 'translateY(-2px)',
                  },
                  '&.Mui-focused': {
                    bgcolor: 'background.paper',
                    boxShadow: '0 0 0 2px rgba(33, 150, 243, 0.2)',
                  }
                }
              }}
            />
          </Box>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAddContact}
            sx={{
              borderRadius: 2,
              py: 1.5,
              textTransform: 'none',
              fontWeight: 600,
              boxShadow: 'none',
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              transition: 'all 0.3s ease',
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: '0.5px',
              '&:hover': {
                boxShadow: '0 4px 12px rgba(33, 150, 243, 0.3)',
                transform: 'translateY(-2px)',
              }
            }}
          >
            Add Contacts
          </Button>
        </Box>
      </Paper>

      {/* Contact Selection Dialog */}
      <Dialog 
        open={isContactDialogOpen} 
        onClose={() => setIsContactDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ 
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}>
          <PersonIcon sx={{ color: 'primary.main' }} />
          Select Contacts
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ mb: 2, mt: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <List>
            {filteredContacts.map((contact) => (
              <ListItem
                key={contact.id}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'action.hover',
                  }
                }}
              >
                <Checkbox
                  checked={selectedContacts.includes(contact.id)}
                  onChange={() => handleContactSelection(contact.id)}
                />
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={contact.name}
                  secondary={contact.phone}
                />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setIsContactDialogOpen(false)}
            sx={{ textTransform: 'none' }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleConfirmContacts}
            variant="contained"
            sx={{ 
              textTransform: 'none',
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            }}
          >
            Add Selected Contacts
          </Button>
        </DialogActions>
      </Dialog>

      {contacts.length > 0 && (
        <Paper 
          elevation={0}
          sx={{ 
            p: 3,
            borderRadius: 3,
            bgcolor: 'background.paper',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
              transform: 'translateY(-2px)',
            }
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 3,
              fontWeight: 600,
              color: 'text.primary',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: '0.5px'
            }}
          >
            <PersonIcon sx={{ color: 'primary.main' }} />
            Split Details
          </Typography>
          <List sx={{ p: 0 }}>
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ListItem
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'background.default',
                    mb: 1,
                    transition: 'all 0.3s ease',
                    fontFamily: "'Poppins', sans-serif",
                    '&:hover': {
                      bgcolor: 'action.hover',
                      transform: 'translateX(4px)',
                    }
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        width: 40,
                        height: 40,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        }
                      }}
                    >
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          fontWeight: 600,
                          fontFamily: "'Poppins', sans-serif",
                          letterSpacing: '0.5px'
                        }}
                      >
                        {contact.name}
                      </Typography>
                    }
                    secondary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <RupeeIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {calculateShare()}
                        </Typography>
                      </Box>
                    }
                  />
                  <ListItemSecondaryAction sx={{ display: 'flex', gap: 1 }}>
                    <Tooltip title="Delete">
                      <IconButton
                        onClick={() => handleDeleteContact(contact.id)}
                        sx={{
                          color: 'error.main',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'error.light',
                            transform: 'rotate(90deg)',
                          }
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                    <Button
                      variant="contained"
                      startIcon={<SendIcon />}
                      onClick={() => handleSendRequest(contact.id)}
                      sx={{
                        borderRadius: 2,
                        textTransform: 'none',
                        fontWeight: 600,
                        boxShadow: 'none',
                        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        transition: 'all 0.3s ease',
                        fontFamily: "'Poppins', sans-serif",
                        letterSpacing: '0.5px',
                        '&:hover': {
                          boxShadow: '0 4px 12px rgba(33, 150, 243, 0.3)',
                          transform: 'translateY(-2px)',
                        }
                      }}
                    >
                      Send Request
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                {index < contacts.length - 1 && (
                  <Divider variant="inset" component="li" sx={{ my: 1 }} />
                )}
              </motion.div>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default SmartBillSplit; 