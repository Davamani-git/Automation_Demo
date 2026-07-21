class CleanupManager {

    constructor() {
        this.cleanupTasks = [];
    }

    /**
     * Register a cleanup operation.
     * @param {Function} task
     */
    register(task) {

        if (typeof task !== 'function') {
            throw new Error('Cleanup task must be a function.');
        }

        this.cleanupTasks.push(task);
    }

    /**
     * Execute cleanup operations in reverse order.
     */
    async execute() {

        while (this.cleanupTasks.length > 0) {

            const task = this.cleanupTasks.pop();

            try {

                await task();

            }
            catch (error) {

                console.error(
                    'Cleanup failed:',
                    error.message
                );

            }

        }

    }

    /**
     * Clear all registered cleanup tasks.
     */
    clear() {
        this.cleanupTasks = [];
    }

}

module.exports = CleanupManager;