import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Switch,
  IconButton,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Paper,
  Chip,
  Avatar,
  Fade,
  Grow,
  Tooltip,
  Badge,
} from '@mui/material';
import {
  CalendarToday as CalendarIcon,
  Add as AddIcon,
  Payment as PaymentIcon,
  Notifications as NotificationsIcon,
  CurrencyRupee as RupeeIcon,
  Person as PersonIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface Reminder {
  id: string;
  name: string;
  amount: number;
  recipient: string;
  dueDate: string;
  frequency: string;
  autoNotify: boolean;
  status: 'pending' | 'paid';
}

const RecurringPaymentReminder: React.FC = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [newReminder, setNewReminder] = useState<Partial<Reminder>>({
    name: '',
    amount: 0,
    recipient: '',
    dueDate: '',
    frequency: 'monthly',
    autoNotify: true,
    status: 'pending',
  });

  const handleAddReminder = () => {
    const reminder: Reminder = {
      id: `reminder-${reminders.length + 1}`,
      name: newReminder.name || '',
      amount: newReminder.amount || 0,
      recipient: newReminder.recipient || '',
      dueDate: newReminder.dueDate || '',
      frequency: newReminder.frequency || 'monthly',
      autoNotify: newReminder.autoNotify || true,
      status: 'pending',
    };
    setReminders([...reminders, reminder]);
    setNewReminder({});
  };

  const handlePayNow = (reminderId: string) => {
    setReminders(
      reminders.map((reminder) =>
        reminder.id === reminderId
          ? { ...reminder, status: 'paid' }
          : reminder
      )
    );
  };

  const handleToggleAutoNotify = (reminderId: string) => {
    setReminders(
      reminders.map((reminder) =>
        reminder.id === reminderId
          ? { ...reminder, autoNotify: !reminder.autoNotify }
          : reminder
      )
    );
  };

  const handleDeleteReminder = (reminderId: string) => {
    setReminders(reminders.filter(reminder => reminder.id !== reminderId));
  };

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
          Recurring Payments
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
          <AddIcon sx={{ color: 'primary.main' }} />
          Add New Reminder
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Reminder Name"
              placeholder="e.g., Netflix Subscription"
              value={newReminder.name}
              onChange={(e) =>
                setNewReminder({ ...newReminder, name: e.target.value })
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PaymentIcon sx={{ color: 'primary.main' }} />
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Amount"
              type="number"
              placeholder="Enter amount"
              value={newReminder.amount}
              onChange={(e) =>
                setNewReminder({
                  ...newReminder,
                  amount: parseFloat(e.target.value),
                })
              }
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Recipient"
              placeholder="Enter recipient name"
              value={newReminder.recipient}
              onChange={(e) =>
                setNewReminder({ ...newReminder, recipient: e.target.value })
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: 'primary.main' }} />
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Due Date"
              type="date"
              value={newReminder.dueDate}
              onChange={(e) =>
                setNewReminder({ ...newReminder, dueDate: e.target.value })
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarIcon sx={{ color: 'primary.main' }} />
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
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel sx={{ fontFamily: "'Poppins', sans-serif" }}>Frequency</InputLabel>
              <Select
                value={newReminder.frequency}
                onChange={(e) =>
                  setNewReminder({
                    ...newReminder,
                    frequency: e.target.value as string,
                  })
                }
                label="Frequency"
                sx={{
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
                }}
              >
                <MenuItem value="daily" sx={{ fontFamily: "'Poppins', sans-serif" }}>Daily</MenuItem>
                <MenuItem value="weekly" sx={{ fontFamily: "'Poppins', sans-serif" }}>Weekly</MenuItem>
                <MenuItem value="monthly" sx={{ fontFamily: "'Poppins', sans-serif" }}>Monthly</MenuItem>
                <MenuItem value="yearly" sx={{ fontFamily: "'Poppins', sans-serif" }}>Yearly</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddReminder}
              fullWidth
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
              Add Reminder
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {reminders.length > 0 && (
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
            <NotificationsIcon sx={{ color: 'primary.main' }} />
            Active Reminders
          </Typography>
          <Grid container spacing={2}>
            {reminders.map((reminder) => (
              <Grow in={true} timeout={500} key={reminder.id}>
                <Grid item xs={12}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: 'background.default',
                      transition: 'all 0.3s ease',
                      fontFamily: "'Poppins', sans-serif",
                      '&:hover': {
                        bgcolor: 'action.hover',
                        transform: 'translateX(4px)',
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Badge
                          overlap="circular"
                          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                          badgeContent={
                            reminder.status === 'paid' ? (
                              <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                            ) : null
                          }
                        >
                          <Avatar 
                            sx={{ 
                              bgcolor: 'primary.main',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'scale(1.1)',
                              }
                            }}
                          >
                            <PaymentIcon />
                          </Avatar>
                        </Badge>
                        <Box>
                          <Typography 
                            variant="subtitle1" 
                            sx={{ 
                              fontWeight: 600,
                              fontFamily: "'Poppins', sans-serif",
                              letterSpacing: '0.5px'
                            }}
                          >
                            {reminder.name}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            {reminder.recipient}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 600,
                            fontFamily: "'Poppins', sans-serif",
                            letterSpacing: '0.5px'
                          }}
                        >
                          ₹{reminder.amount}
                        </Typography>
                        <Chip
                          label={reminder.frequency}
                          size="small"
                          sx={{
                            bgcolor: 'primary.light',
                            color: 'primary.main',
                            fontWeight: 500,
                            transition: 'all 0.3s ease',
                            fontFamily: "'Poppins', sans-serif",
                            '&:hover': {
                              transform: 'scale(1.05)',
                            }
                          }}
                        />
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Due: {reminder.dueDate}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            Auto Notify
                          </Typography>
                          <Switch
                            checked={reminder.autoNotify}
                            onChange={() => handleToggleAutoNotify(reminder.id)}
                            color="primary"
                          />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Tooltip title="Delete">
                            <IconButton
                              onClick={() => handleDeleteReminder(reminder.id)}
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
                          {reminder.status === 'pending' && (
                            <Button
                              variant="contained"
                              startIcon={<PaymentIcon />}
                              onClick={() => handlePayNow(reminder.id)}
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
                              Pay Now
                            </Button>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              </Grow>
            ))}
          </Grid>
        </Paper>
      )}
    </Box>
  );
};

export default RecurringPaymentReminder; 